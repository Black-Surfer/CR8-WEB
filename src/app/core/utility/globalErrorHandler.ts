import { ErrorHandler, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(){

    }

    handleError(error: any): void {
    // Handle the error here
    console.log('Global Error:', error);
    
    // Show a toastr notification
    }

}