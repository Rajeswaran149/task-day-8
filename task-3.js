class person {
    constructor(Name,Father_Name,Mother_Name,Gender,Age,Address,Mobile_No,Email,Voter_ID,Aadhar_No) {
    this.Name = Name ;
    this.Father_Name = Father_Name ;
    this.Mother_Name = Mother_Name;
    this.Gender = Gender; 
    this.Age=Age
    this.Address = Address ;
    this.Mobile_No = Mobile_No; ;
    this.Email = Email;
    this.Voter_ID=Voter_ID
    this.Aadhar_No = Aadhar_No;
    }
    person_name() {
    return `Name : ${this.Name}`;
    }
    person_father_name() {
    return `Father name : ${this.Father_Name}`;
    }
    person_mother_name() {
    return `Mother name : ${this.Mother_Name}`;
    }
    person_gender() {
    return `Gender : ${this.Gender}`;
    }
    person_age() {
        return `Age : ${this.Age}`;
        }
    person_address() {
    return `Address : ${this.Address}`;
    }
    person_mobile_no() {
    return `Mobile_no : ${this.Mobile_No}`;
    }
    person_Email() {
    return `Email id : ${this.Email}`;
    }
    person_voter_id() {
        return `Voter id : ${this.Voter_ID}`;
        }
    person_aadhar_no() {
        return `Aadhar_no : ${this.Aadhar_No}`;
        }
    }
    //object
    const person_obj = new person("Rajeswaran","vanaraja","magamayi",
    "Male","26","mallapuram_madurai","1234567891","rajeswaran149@gmail.com","147852343","125879723");
    console.log(person_obj.person_name());
    console.log(person_obj.person_father_name());
    console.log(person_obj.person_mother_name());
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile_no());
    console.log(person_obj.person_Email());
    console.log(person_obj.person_voter_id());
    console.log(person_obj.person_aadhar_no());