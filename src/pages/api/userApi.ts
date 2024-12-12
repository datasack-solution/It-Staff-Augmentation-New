import axios from "axios"

interface EnquiryForm {
    industry: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    reason?: string;
    nda: boolean;
}

export interface TransformedSkillsets {
    category: string;
    technologies: { tech: string; quantity: number }[];
  }

  
export interface ClientRequestData extends EnquiryForm{
    skillsets?:TransformedSkillsets[],
    duration?:string
}

interface ClientApi{
     createClient:(client:ClientRequestData)=>Promise<void>
}

class ClientApiService implements ClientApi{
    async createClient(client:ClientRequestData):Promise<void>{
        return await axios.post('https://it-augmentation-server.vercel.app/clientsNew',client)
        // return await axios.post('http://localhost:4000/clientsNew',client)
        // return await axios.post('')
    }
}

export const clientApiService = new ClientApiService()