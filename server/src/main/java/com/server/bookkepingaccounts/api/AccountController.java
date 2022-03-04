package com.server.bookkepingaccounts.api;

import com.server.bookkepingaccounts.model.Account;
import com.server.bookkepingaccounts.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
  private AccountService accountService;

  @Autowired
  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @GetMapping()
  public List<Account> getAllAccounts() {
    return this.accountService.getAllAcoounts();
  }

  @PostMapping("add")
  public ResponseEntity saveAccounts(@RequestBody List<Account> fetchedAccounts) {
    return this.accountService.saveAccounts(fetchedAccounts);
  }
}
