// ვქმნით ორგანზომილებიან მასივს სამი მომხმარებლისთვის
let userData = [
  [123, 1111, 1000, "მერაბი"],
  [456, 2222, 2000, "გიორგი"],
  [789, 3333, 1500, "ნინო"],
  //[ანგარიშის ნომერი, PIN კოდი, ბალანსი, სახელი]
];

// ფუნქცია ანგარიშის ვალიდურობის შესამოწმებლად
function validateUserInput(accountNumber, pin) {
  for (let i = 0; i < userData.length; i++) {
    if (userData[i][0] === accountNumber && userData[i][1] === pin) {
      return i; // აბრუნებს მომხმარებლის ინდექსს
    }
  }
  return -1; //ვალიდაცია ვერ გაიარა/არასწორი მონაცემები შეიყვანა
}

// ფუნქცია ბალანსის შესამოწმებლად
function checkBalance(userIndex) {
  console.log(
    `${userData[userIndex][3]}, თქვენი ბალანსია $${userData[userIndex][2]}`
  );
  alert(
    `${userData[userIndex][3]}, თქვენი ბალანსია $${userData[userIndex][2]}`
  );
}

// ფუნქცია ანგარიშის შესავსებად
function depositMoney(userIndex) {
  let amount = parseInt(prompt("შეიყვანეთ თანხის ოდენობა:"));
  while (isNaN(amount) || amount <= 0) {
    amount = parseInt(prompt("გთხოვთ, შეიყვანოთ თანხა:"));
  }
  userData[userIndex][2] += amount;
  console.log(
    `ანგარიშის შევსება წარმატებით დასრულდა; თქვენი ახალი ბალანსია $${userData[userIndex][2]}`
  );
  alert(
    `ანგარიშის შევსება წარმატებით დასრულდა; თქვენი ახალი ბალანსია $${userData[userIndex][2]}`
  );
}

// ფუნქცია თანხის გამოსატანად
function withdrawMoney(userIndex) {
  let amount = parseInt(prompt("შეიყვანეთ თანხის ოდენობა:"));
  while (isNaN(amount) || amount <= 0 || amount > userData[userIndex][2]) {
    amount = parseInt(prompt("გთხოვთ, შეიყვანოთ თანხა:"));
  }
  userData[userIndex][2] -= amount;
  console.log(
    `თანხის გამოტანა წარმატებით დასრულდა; თქვენი ახალი ბალანსია $${userData[userIndex][2]}`
  );
  alert(
    `თანხის გამოტანა წარმატებით დასრულდა; თქვენი ახალი ბალანსია $${userData[userIndex][2]}`
  );
}

// საჭირო ოპერაციის არჩევა მომხმარებლის მიერ
let accountNumber = parseInt(prompt("შეიყვანეთ თქვენი ანგარიშის ნომერი:"));
checkAccountNumber(accountNumber);

// ანგარიშის ნომრის შემოწმება
function checkAccountNumber(accountNumber) {
  const currentAccountNumber = accountNumber;
  let isChecked = userData.find((item) => {
    if (item[0] == currentAccountNumber) {
      return true;
    } else {
      return false;
    }
  });
  if (isChecked) {
    // გადავა პინ კოდზე თუ შეყვანილი ანგარიშის მონაცემი მოიძებნა მასივში
  } else {
    alert("არასწორი ანგარიშის ნომერი");
    accountNumber = parseInt(prompt("შეიყვანეთ თქვენი ანგარიშის ნომერი:"));
    checkAccountNumber(accountNumber);
  }
}

// პინ კოდის შეყვანა
let pin = parseInt(prompt("შეიყვანეთ თქვენი PIN კოდი:"));

// ანგარიშის ნომერი და პინ კოდი
let userIndex = validateUserInput(accountNumber, pin);

// ფუნქცია სტანდარტული ალერტ ფანჯრის გამოსატანად
if (userIndex !== -1) {
  let choice = parseInt(
    prompt(
      "აირჩიეთ ვარიანტი:\n1. ბალანსის შემოწმება\n2. ანგარიშის შევსება\n3. თანხის გამოტანა"
    )
  );

  switch (choice) {
    case 1:
      checkBalance(userIndex);
      break;
    case 2:
      depositMoney(userIndex);
      break;
    case 3:
      withdrawMoney(userIndex);
      break;
    default:
      alert("არასწორი ვარიანტი");
  }
} else {
  alert("არასწორი ანგარიშის ნომერი ან PIN კოდი");
}
