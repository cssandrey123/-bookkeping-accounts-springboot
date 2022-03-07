package com.server.bookkepingaccounts.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Rule {
  @Id
  @SequenceGenerator(
    name = "rule_sequence",
    sequenceName = "rule_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "rule_sequence"
  )
  private Long id;

  @Column(nullable = false)
  private Long debitAccount;

  @Column(nullable = false)
  private Long creditAccount;

  @Column(nullable = false)
  private String description;

  @JsonIgnore
  public boolean isValidRule() {
    return (
      debitAccount != null && creditAccount != null &&
      this.description != null && !description.isEmpty()
    );
  }

  public boolean hasValidAccounts(List<Account> allAccounts) {
    Boolean creditAccountExists = allAccounts.stream()
            .filter(account -> this.creditAccount.equals(account.getAccountNumber())).findFirst().isPresent();
    Boolean debitAccountExists = allAccounts.stream()
            .filter(account -> this.debitAccount.equals(account.getAccountNumber())).findFirst().isPresent();

    return creditAccountExists && debitAccountExists;
  }
}









