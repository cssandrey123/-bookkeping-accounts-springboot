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
  private Long debitAccountId;

  @Column(nullable = false)
  private Long creditAccountId;

  @Column(nullable = false)
  private String description;

  @JsonIgnore
  public boolean isValidRule() {
    return (
      debitAccountId != null && creditAccountId != null &&
      this.description != null && !description.isEmpty()
    );
  }

  public boolean hasValidAccounts(List<Account> allAccounts) {
    Boolean creditAccountExists = allAccounts.stream()
            .filter(account -> this.creditAccountId.equals(account.getAccountNumber())).findFirst().isPresent();
    Boolean debitAccountExists = allAccounts.stream()
            .filter(account -> this.debitAccountId.equals(account.getAccountNumber())).findFirst().isPresent();

    return creditAccountExists && debitAccountExists;
  }
}









