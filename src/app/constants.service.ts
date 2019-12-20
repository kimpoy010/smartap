import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

	//public apiURL:string = "http://sakura-smart.com";
	public apiURL:string = "https://sakura-smart.com";
	public families:any;
    public devices:any;
    public defaultFamilyID:string;
  	constructor() { }


}
