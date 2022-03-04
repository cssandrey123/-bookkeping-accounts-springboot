package com.server.bookkepingaccounts.service;

import com.server.bookkepingaccounts.model.Account;
import com.server.bookkepingaccounts.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class AccountService {
  private AccountRepository accountRepository;

  @Autowired
  public AccountService(AccountRepository accountRepository) {
    this.accountRepository = accountRepository;
  }

  public List<Account> getAllAcoounts() {
    return this.accountRepository.findAll();
  }

  // TODO here should be validate to be all unique accounts also && handle errors here
  public ResponseEntity saveAccounts(List<Account> newAccounts) {
    HashMap<Long,Account> uniqueAccounts = new HashMap<Long,Account>();

    // Check if all the accounts are valid and have a unique account number
    for (Account acount : newAccounts) {
      if (!acount.isValid()) {
        System.out.println("Invalid account");
        System.out.println(acount);
        return new ResponseEntity("One or more than one accounts are invalid", HttpStatus.UNPROCESSABLE_ENTITY);
      }
      if (uniqueAccounts.containsKey(acount.getAccountNumber())) {
        System.out.println("Account not unique");
        return new ResponseEntity("The accounts list contains duplicates", HttpStatus.UNPROCESSABLE_ENTITY);
      }
      uniqueAccounts.put(acount.getAccountNumber(), acount);
    }

    // First we delete all the existing accounts
    try {
      accountRepository.deleteAll();
    } catch (Exception e) {
      return new ResponseEntity("Something when wrong when deleting old accounts", HttpStatus.INTERNAL_SERVER_ERROR );
    }

    return new ResponseEntity(accountRepository.saveAll(newAccounts), HttpStatus.OK) ;
  }
}
