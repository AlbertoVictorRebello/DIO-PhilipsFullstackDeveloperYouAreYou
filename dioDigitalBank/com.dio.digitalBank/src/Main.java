import CustomExceptions.OperationDeniedException;
import models.Account;
import models.Client;
import models.CurrentAccount;
import models.SavingsAccount;

public class Main {
    public static void main(String[] args) {
        Client john = new Client("John");


        Account currentAccount = new CurrentAccount(john);
        Account savingsAccount = new SavingsAccount(john);

        try {

            currentAccount.printBankStatement();

            currentAccount.deposit(1000);
            currentAccount.printBankStatement();


            currentAccount.withDraw(500);
            currentAccount.printBankStatement();

            currentAccount.transfer(500, savingsAccount);
            currentAccount.printBankStatement();

            savingsAccount.printBankStatement();

            savingsAccount.deposit(-500);

        } catch (OperationDeniedException e) {
            System.out.println(e.getMessage());

        }



    }
}
