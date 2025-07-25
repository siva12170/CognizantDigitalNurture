package loan;


public class Loan {
    private Long id;
    private String loanNumber;
    private String borrower;
    private double amount;

    // Constructors
    public Loan() {}

    public Loan(Long id, String loanNumber, String borrower, double amount) {
        this.id = id;
        this.loanNumber = loanNumber;
        this.borrower = borrower;
        this.amount = amount;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(String loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getBorrower() {
        return borrower;
    }

    public void setBorrower(String borrower) {
        this.borrower = borrower;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}