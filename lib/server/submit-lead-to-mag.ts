"use server";
import { siteConfig } from "../config";
import { MAGPayload } from "../types/ctaTypes";
import { ServerActionError, tryCatch } from "../utils";

// This function will generate the correct request headers based on if the vercel bypass secret is available or not.
const generateRequestHeader = () => {
    const apiKey = siteConfig.mag.backend.apiKey;
    const headerValues = {
      Authorization: `Bearer ${apiKey}`,
      "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
    }
  
    const headersToReturn : Record<string, string> = {};
  
    for (const [key, value] of  Object.entries(headerValues)){
      if (value){
        headersToReturn[key] = value
      }
    }
    
    return headersToReturn;
}

export const submitLeadToMagBackend = async (payload: MAGPayload) => {

    const { data, error } = await tryCatch(
        fetch(`${siteConfig.mag.backend.url}/v5/forms/lead-generation/create`,  {
            method: "POST",
            body: JSON.stringify(payload),
            headers: generateRequestHeader()
        })
    )
    if (error){
        return { 
            data: null,
            error: error.message
        }
    }

    const { data: response, error: fetchDataErr} = await tryCatch(data.json());

    if(fetchDataErr){
        return {
            data: null,
            error: fetchDataErr.message
        }
    }

    if (!data.ok){
        return {
            data: null, 
            error: new ServerActionError(response.error).message
        }
    }
    
    return {
        data: response,
        error: null
    }
}