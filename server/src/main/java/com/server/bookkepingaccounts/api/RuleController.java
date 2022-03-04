package com.server.bookkepingaccounts.api;

import com.server.bookkepingaccounts.model.Rule;
import com.server.bookkepingaccounts.service.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rules")
public class RuleController {
  private RuleService ruleService;

  @Autowired
  public RuleController(RuleService ruleService) {
    this.ruleService = ruleService;
  }

  @GetMapping()
  public List<Rule> getAllRules() {
    return this.ruleService.getRules();
  }

  @PostMapping("add")
  public ResponseEntity<Rule> saveRule(@RequestBody Rule rule) {
    return this.ruleService.saveRule(rule);
  }

  @PutMapping("update/{id}")
  public ResponseEntity<Rule> updateRule(@PathVariable Long id, @RequestBody Rule rule) {
    return this.ruleService.updateRule(id,rule);
  }

  @DeleteMapping("delete/{id}")
  public ResponseEntity<Long> deleteRule(@PathVariable Long id) {
    return this.ruleService.deleteRule(id);
  }
}
