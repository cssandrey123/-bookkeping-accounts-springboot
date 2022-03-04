package com.server.bookkepingaccounts.repository;

import com.server.bookkepingaccounts.model.Rule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RuleRepository extends JpaRepository<Rule, Long> {
}
