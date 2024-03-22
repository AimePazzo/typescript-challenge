// // This is Prime Number Function
const arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterPrime = (arrNumbers: number[]):number[] => {
    const primeNumbers: number[] = []
    for (let index = 0; index < arrNumbers.length; index++) {
        const currNumber: number = arrNumbers[index];
        let isPrime: boolean = true;

        if (currNumber === 1 || currNumber === 0) {
            isPrime = false;
        }
        else {
            for (let i = 2; i <= Math.sqrt(currNumber); i++) {
                if (currNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primeNumbers.push(currNumber);
        }

    }
    return primeNumbers;
}

console.log(filterPrime(arrNumbers));

// // This Reverse Array
const reverseArray = (arrNumbers: number[]):number[] => {
    const reversedArr: number[] = [];
    for (let i: number = arrNumbers.length - 1; i >= 0; i--) {
        reversedArr.push(arrNumbers[i]);
    }
    return reversedArr;
}
console.log('====================================');
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log('====================================');

// Inplace Array reversing 

const reverseArrayInplace = (numbers: number[]):number[] => {
    let left: number = 0;
    let right: number = numbers.length - 1;
    while (left < right) {
        const temp: number = numbers[left];
        numbers[left] = numbers[right];
        numbers[right] = temp;
        left++;
        right--;
    }
    return numbers;
}

let numbers: number[] = [1, 2, 3, 4, 5];
console.log('====================================');
console.log("Reversed array:", reverseArrayInplace(numbers));
console.log('====================================');


//   Palindrome 

 const palindrome = (str: string):boolean => {
     const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
     return cleanedStr === cleanedStr.split('').reverse().join('');
 }

 console.log('====================================');
 console.log('Palindrome');
 console.log(palindrome('madam'));
 console.log(palindrome("Was it a car or a cat I saw"));

 console.log('====================================');

//   Format Array

 interface PersonInfo {
     'second-name': string;
     age: number;
 }

 interface FormattedData {
     females: { [firstName: string]: PersonInfo };
     males: { [firstName: string]: PersonInfo };
 }

 function formatArray(arr: string[]): FormattedData {
     const formattedData: FormattedData = {
         females: {},
         males: {}
     };

     for (const item of arr) {
         const [nameAgeStr, age, gender] = item.split(',').map(str => str.trim());
         const [fullName] = nameAgeStr.split(',').map(str => str.trim());
         const [firstName, secondName] = fullName.split(' ');

         const ageNum: number = parseInt(age);

         const person: PersonInfo = { 'second-name': secondName, 'age': ageNum };


         if (gender === 'female') {
             formattedData.females[firstName] = person;
         } else if (gender === 'male') {
             formattedData.males[firstName] = person;
         }
     }

     return formattedData;
 }

//   Example
 const formattedData: FormattedData = formatArray([
     "Patrick wyne, 30, male",
     "lil wyne, 32, male",
     "Eric mimi, 21, female",
     "Dodos deck, 21, male",
     "Alian Dwine, 22, male",
     "Patrick wyne, 33, male",
     "Patrick wyne, 10, male",
     "Patrick wyne, 40, male"
 ]);
 console.log('====================================');
 console.log(formattedData);
 console.log('====================================');

//   Sorting

 const arrSort = (arrNumbers: number[]):number[] => {
     const primeNumbers: number[] = filterPrime(arrNumbers);
     const filteredArr: number[] = arrNumbers.filter(num => !primeNumbers.includes(num));
     for (let i: number = 0; i < filteredArr.length - 1; i++) {
         for (let j: number = 0; j < filteredArr.length - 1 - i; j++) {
             if (filteredArr[j] < filteredArr[j + 1]) {
                 let temp: number = filteredArr[j];
                 filteredArr[j] = filteredArr[j + 1];
                 filteredArr[j + 1] = temp;
             }
         }
     }
     return filteredArr;
 }

//   Example
 const arr: number[] = [8, 2, 7, 3, 9, 5, 6, 11];
 console.log(arrSort(arr));



//   Majarity

 const majority = (arr: number[]):boolean => {
     let count: Record<number, number> = {};
     let maxCount = 0;
     let majorityElement: number | undefined;

     arr.forEach(element => {
         count[element] = (count[element] || 0) + 1;
         if (count[element] > maxCount) {
             maxCount = count[element];
             majorityElement = element;
         }
     });

     if (maxCount > arr.length / 2) {
         console.log(`The majority element is ${majorityElement} with count ${maxCount}`);
         return true;
     } else {
         console.log('No majority element found');
         return false;
     }
 };

 console.log('====================================');
 console.log(majority([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
  console.log(majority([3, 1, 3, 4, 4]));


//   Asynchronous Js & Error Handling
 interface Student{
 name:string,
 age?:number
 }

//   let setStudentAgeApi = (student: Student, age: number) => {  async code below
//       console.log("1. Starting ..")
//       setTimeout(() => {
//           console.log("2. setting age for the student")
//           student.age = age;
//       }, 500);
//       console.log("3. Done ..")


//   }
//   console.log('====================================');
//   let student = {name: 'Eric'}
//   setStudentAgeApi(student, 20)
//   console.log(student)

 const setStudentAgeApi = (student:Student, age:number): Promise<Student> => {

     return new Promise(function (resolve, reject) {
         setTimeout(() => {
             student.age = age;
             if(age < 0)
                 reject ("Bad Age")
          else
                   resolve(student)
         },
             500);
 
 
     });
  }
  
  let student = { name: "denis" }
  console.log("==============================")
  setStudentAgeApi(student, 12).then(res=>{
      console.log(res)
     console.log('====================================');

  }).catch(err => console.log(err))

//   Families
 interface Family{
     fatherName:string,
     motherName:string,
     childrenNumber?:number,
     totalNumberofFamilyMembers?:number,
 }
 const setFamilies = (families: Family[]): Promise<Family[]> => {
     return new Promise<Family[]>((resolve, reject) => {
         setTimeout(() => {
             for (const family of families) {
                 if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
                     reject("Yves is not an allowed dad in 2022");
                     return; 
                 }
                 const totalNumberofFamilyMembers = 2 + (family.childrenNumber || 0);
                 family.totalNumberofFamilyMembers = totalNumberofFamilyMembers;
             }
             resolve(families); 
         }, 1000);
     });
 };



 const families: Family[] = [
     { fatherName: 'John', motherName: 'Alice', childrenNumber: 2 },
     { fatherName: 'yves', motherName: 'Emma', childrenNumber: 1 },
     { fatherName: 'Michael', motherName: 'Sophia', childrenNumber: 3 }
 ];
 setFamilies(families).then(res=>{
     console.log('====================================');
     console.log(res)
 }).catch(err => 
     console.log(err))
    