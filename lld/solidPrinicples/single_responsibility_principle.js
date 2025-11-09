// Single Responsibility Principle

// A class should have only one responsibility
// A class should have only one reason to change

// As the name suggests, the Single Responsibility principle states 2 key principles.

// Your class or method should have only one reason to change.
// Your class or method should have only one responsibility to take care of.

class Invoice {
  addInvoice() {
    console.log('Invoice added');
  }

  deleteInvoice() {
    console.log('Invoice deleted');
  }

  generateReport() {
    console.log('Report generated');
  }

  emailReport() {
    console.log('Report emailed');
  }

  emailInvoice() {
    console.log('Invoice emailed');
  }
}

// The class Invoice consists of 5 different methods - AddInvoice(), DeleteInvoice(),
// GenerateReport(), EmailReport(), emailInvoice(). As the single responsibility principle
// says, your class or method should have only one responsibility and only one reason to
// change, now let’s find out whether the above example satisfies the conditions.

// If we take a look at the methods, each has a single responsibility

//  For e.g. The AddInvoice() method is only responsible for adding an invoice to the
//  system, DeleteInvoice() method is only responsible for deleting invoices, and likewise
//  for GenerateReport() and EmailReport(), EmailInvoice() methods. We can say that methods
// do satisfy the single responsibility principle. But if you take a look at Invoice class,
// it is now taking care of multiple responsibilities which are not satisfying the single
// responsibility principle. So in order to satisfy the single responsibility principle
// for class Invoice, we will divide the methods into different classes where one
// class will take care of only one responsibility.

class InvoiceService {
  addInvoice() {
    console.log('Invoice added');
  }

  deleteInvoice() {
    console.log('Invoice deleted');
  }
}

class EmailService {
  emailInvoice() {
    console.log('Invoice emailed');
  }

  emailReport() {
    console.log('Report emailed');
  }
}

class ReportService {
  generateReport() {
    console.log('Report generated');
  }
}

// That’s it! Now each class is responsible to take care of only one responsibility
// and only one reason to change. The code is now ever smaller and manageable for each
// functionality and you won’t be required to test the complete functionality of each
// class if the change is happening for any one of the classes.

// Conclusion
// With the above example, we have now understood how to refactor the code and achieve
// the single responsibility principle. With the help of the single responsibility
// principle, it helps us to reduce the complexity of the program and easier to
// maintain the code.
