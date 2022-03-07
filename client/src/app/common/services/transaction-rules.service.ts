import {Injectable} from '@angular/core';
import {TransactionRuleModel} from '../models/transaction-rule.model';
import {BehaviorSubject, concat, forkJoin, Observable} from 'rxjs';
import {MOCK_RULES} from '../constants';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

const API = environment.API_URL;
@Injectable({
  providedIn: 'root'
})

export class TransactionRulesService {
  private allRules: TransactionRuleModel[] = [];
  rulesChangeEvent: BehaviorSubject<TransactionRuleModel[]> = new BehaviorSubject<TransactionRuleModel[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  getRules(): BehaviorSubject<TransactionRuleModel[]> {
    if (!this.allRules || this.allRules.length === 0) {
      this._getRules().subscribe(rules => {
        this.allRules = rules;
        this.rulesChangeEvent.next(rules);
      });
    }
    return this.rulesChangeEvent;
  }

  addRule(rule: TransactionRuleModel): Observable<TransactionRuleModel> {
    return this.httpClient.post<TransactionRuleModel>(API + '/rules/add', rule).pipe(
      tap(newRule => {
        if (newRule) {
          this.allRules.push(newRule);
          this.rulesChangeEvent.next(this.allRules);
        }
      })
    );
  }

  editRule(ruleToEdit: TransactionRuleModel): Observable<TransactionRuleModel> {
    return this.httpClient.put<TransactionRuleModel>(API + '/rules/update/' + ruleToEdit.id, ruleToEdit).pipe(
      tap(editedRule => {
        const ruleIndex = this.allRules.findIndex(rule => rule.id === editedRule.id);
        this.allRules[ruleIndex] = editedRule;
        this.rulesChangeEvent.next(this.allRules);
      })
    );
  }

  deleteRule(rule: TransactionRuleModel): Observable<number> {
    return this.httpClient.delete<number>(API + '/rules/delete/' + rule.id).pipe(
      tap(deletedRuleId => {
        this.allRules = this.allRules.filter(filteredRule => filteredRule.id !== deletedRuleId);
        this.rulesChangeEvent.next(this.allRules);
      })
    );
  }

  addMockedRules(): Observable<any> {
    return concat(...MOCK_RULES.map(mockedRule => this.addRule(mockedRule as TransactionRuleModel))).pipe();
  }

  private _getRules(): Observable<TransactionRuleModel[]> {
    return this.httpClient.get<TransactionRuleModel[]>(API + '/rules');
  }
}
