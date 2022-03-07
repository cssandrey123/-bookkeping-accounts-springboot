package com.server.bookkepingaccounts.service;

import com.server.bookkepingaccounts.model.Account;
import com.server.bookkepingaccounts.model.Rule;
import com.server.bookkepingaccounts.repository.AccountRepository;
import com.server.bookkepingaccounts.repository.RuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RuleService {
  private RuleRepository ruleRepository;
  private AccountRepository accountRepository;

  @Autowired
  public RuleService(RuleRepository ruleRepository,
                     AccountRepository accountRepository) {
    this.ruleRepository = ruleRepository;
    this.accountRepository = accountRepository;
  }

  public List<Rule> getRules() {
    return this.ruleRepository.findAll();
  }

  public ResponseEntity<Rule> saveRule(Rule newRule) {
    List<Account> allAccounts = this.accountRepository.findAll();

    if (!newRule.isValidRule() || !newRule.hasValidAccounts(allAccounts)) {
      return new ResponseEntity<>(null, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    return new ResponseEntity<>(this.ruleRepository.save(newRule), HttpStatus.OK);
  }

  public ResponseEntity<Rule> updateRule(Long id, Rule ruleForUpdate) {
    List<Account> allAccounts = this.accountRepository.findAll();
    if (!ruleForUpdate.isValidRule() || !ruleForUpdate.hasValidAccounts(allAccounts)) {
      return new ResponseEntity<>(null, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    Optional<Rule> ruleById = this.ruleRepository.findById(id);
    if(!ruleById.isPresent()) {
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    Rule existingRule = ruleById.get();
    existingRule.setDescription(ruleForUpdate.getDescription());
    existingRule.setCreditAccount(ruleForUpdate.getCreditAccount());
    existingRule.setDebitAccount(ruleForUpdate.getDebitAccount());
    return new ResponseEntity<>(ruleRepository.save(existingRule), HttpStatus.OK);
  }

  public ResponseEntity deleteRule(Long id) {
    try {
      ruleRepository.deleteById(id);
    } catch (Exception e) {
      return new ResponseEntity(null, HttpStatus.NOT_FOUND );
    }
    return new ResponseEntity(id, HttpStatus.OK);
  }
}
