package account;


import account.Account;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {
    private List<Account> accounts = new ArrayList<>();

    public AccountController() {
        // Sample data
        accounts.add(new Account(1L, "ACC001", "John Doe", 1000.0));
        accounts.add(new Account(2L, "ACC002", "Jane Smith", 2000.0));
    }

    @GetMapping
    public List<Account> getAllAccounts() {
        return accounts;
    }

    @GetMapping("/{id}")
    public Account getAccountById(@PathVariable Long id) {
        return accounts.stream()
                .filter(account -> account.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        accounts.add(account);
        return account;
    }
}