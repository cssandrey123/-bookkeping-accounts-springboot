package com.server.bookkepingaccounts.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Account {
  @Id
  @SequenceGenerator(
    name = "account_sequence",
    sequenceName = "account_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "account_sequence"
  )
  @JsonIgnore
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(unique = true, nullable = false)
  private Long accountNumber;

  @JsonIgnore
  public boolean isValid() {
    return (
      accountNumber != null && accountNumber > 0  &&
        this.name != null && !this.name.isEmpty()
    );
  }
}














