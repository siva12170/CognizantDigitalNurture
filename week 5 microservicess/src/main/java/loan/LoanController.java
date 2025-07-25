package loan;


import loan.Loan;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/loans")
public class LoanController {
    private List<Loan> loans = new ArrayList<>();

    public LoanController() {
        // Sample data
        loans.add(new Loan(1L, "LOAN001", "John Doe", 5000.0));
        loans.add(new Loan(2L, "LOAN002", "Jane Smith", 10000.0));
    }

    @GetMapping
    public List<Loan> getAllLoans() {
        return loans;
    }

    @GetMapping("/{id}")
    public Loan getLoanById(@PathVariable Long id) {
        return loans.stream()
                .filter(loan -> loan.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PostMapping
    public Loan createLoan(@RequestBody Loan loan) {
        loans.add(loan);
        return loan;
    }
}