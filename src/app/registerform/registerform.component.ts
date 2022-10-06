import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validators';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

 
  submitted : boolean = false;

  constructor(private formBuilder: FormBuilder) { }



  registerform:any; //form

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      lastName: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      dateofBirth: ['',[Validators.required, ]],
      emailId: ['',[Validators.required,Validators.email]],
      mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(-])/)]],
      confirmPassword: ['',[Validators.required]],
      filesizes: ['',[Validators.required]]

      },{
        validator: MustMatch('password', 'confirmPassword')
      } );
    
  }

  

  // submit Function
  submitData()
  {
    this.submitted = true;
     console.log(this.registerform.value, this.listOfFiles);
     if (this.registerform.invalid) {
      return;
  }
  }


  get firstname() { return this.registerform.get('firstName');}
  get lastname() { return this.registerform.get('lastName');}
  get dateofBirth() { return this.registerform.get('dateofBirth');}
  get emailId() { return this.registerform.get('emailId');}
  get mobileNumber() { return this.registerform.get('mobileNumber');}
  get password() { return this.registerform.get('password');}
  get confirmPassword() { return this.registerform.get('confirmPassword');}









    // fileList: File[] = [];
    listOfFiles: any[] = [];
    // isLoading = false;
  
    onFileChanged(event: any) {
      // this.isLoading = true;
      for (var i = 0; i <= event.target.files.length - 1; i++) {
        var selectedFile = event.target.files[i];
        if (this.listOfFiles.indexOf(selectedFile.name) === -1) {
          // this.fileList.push(selectedFile);
          this.listOfFiles.push(selectedFile.name);
        }
      }
      // this.isLoading = false;
   }
  
    removeSelectedFile(index: number) {
      this.listOfFiles.splice(index, 1);
      // this.fileList.splice(index, 1);
    }
  }





