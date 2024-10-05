import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapters.interface";
import { Injectable } from "@nestjs/common";

@Injectable() // se encuentra a nivel de modulo. Reutilizar se debe exportar
export class AxiosAdapter implements HttpAdapter {

        private axios: AxiosInstance = axios; // creamos una dependencia en el servicio


         async get<T>(url: string): Promise<T> {
            try {
                const { data } = await this.axios.get<T>(url);
                return data;
            } catch (error) {
                
                throw new Error('This is an error - check logs');
            }
            
        }

    
}