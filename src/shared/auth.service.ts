import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {TOKEN_STORAGE} from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  signin(email: string, password: string) {
    console.log(email);
    console.log(password);
    const url = this.apiUrl + "user/login";
    return this.http.post(url, {
      email,
      password
    });
  }

  signup(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    dateOfBirth: string,
    password: string
  ) {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(address);
    console.log(dateOfBirth);
    console.log(password);
    const url = this.apiUrl + "user/register";
    return this.http.post(url, {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      dateOfBirth,
      password
    });
  }
}
