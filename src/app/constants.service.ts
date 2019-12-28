import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

	//public apiURL:string = "http://sakura-smart.com";
	public apiURL:string = "http://192.168.254.121:8000";
	public families:any;
    public devices:any;
    public defaultFamilyID:string;
  	constructor() { }


}
