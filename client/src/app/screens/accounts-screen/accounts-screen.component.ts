import { Component, OnInit } from '@angular/core';
import {AccountsService, AccountModel} from '../../common';
import {ACCOUNTS_SCREEN_MESSAGE} from '../../common';
import {concatMap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-accounts-screen',
  templateUrl: './accounts-screen.component.html',
  styleUrls: ['./accounts-screen.component.scss']
})
export class AccountsScreenComponent implements OnInit {
  allAccounts: AccountModel [] = [];
  dynamicMessage: string = '';

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe((accounts) => {
      this.allAccounts = accounts;
    });
    this.updateScreenMessages();
  }

  readCSV(event: any): void {
    const file = event.target.files[0];
    this.accountsService.parseCSV(file).pipe(
      concatMap((parsedFiles) => {
        if (parsedFiles?.length) {
          return this.accountsService.saveAccounts(parsedFiles);
        } else {
          return throwError('Cannot parse CSV file')
        }
      })
    ).subscribe(savedAccounts => {
      this.allAccounts = savedAccounts;
      this.updateScreenMessages();
    });
    // this.accountsService.parseCSV(file).subscribe((parsedFiles) => {
    //   if (parsedFiles?.length) {
    //     this.accountsService.saveAccounts(parsedFiles);
    //     this.allAccounts = parsedFiles;
    //     this.updateScreenMessages();
    //   }
    // }, error => {
    //   console.log(error);
    // });
  }

  updateScreenMessages(): void {
    if (this.allAccounts?.length) {
      this.dynamicMessage = ACCOUNTS_SCREEN_MESSAGE.saved_accounts.replace('{}', this.allAccounts.length.toString());
    } else {
      this.dynamicMessage = ACCOUNTS_SCREEN_MESSAGE.unsaved_accounts;
    }
  }

}
