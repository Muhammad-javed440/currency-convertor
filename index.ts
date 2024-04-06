#! /usr/bin/env node

import inquirer from "inquirer";

const currency :any  = {
USD:1,//base currency
EUR:0.91,
GBP:0.76,
INR:74.57,
PKR:280,
DIN:40,
};

let userAnswer = await inquirer.prompt(
    [
        {
            name:'from',
            message:'Enter from currency',
            type:'list',
            choices:['USD','EUR','GBP','INR','PKR','DIN']
        },
        {
            name:'to',
            message:'Enter to currency',
            type:'list',
            choices:['USD','EUR','GBP','INR','PKR','DIN']
        },
        {
            name:'amount',
            message:'Enter your amount',
            type:'number'
                
       }

    ]
   )

   console.log(userAnswer);

   let fromAmount =currency[userAnswer.from];

   let toAmount = currency[userAnswer.to];

   let amount=userAnswer.amount;

   let baseAmount = amount/fromAmount;  //  USD base currenecy

   let convertedAmount = baseAmount*toAmount;
   let convertedAmount1= parseFloat(convertedAmount.toFixed(2))
   

   console.log(`   \n From Country exchange rate: ${fromAmount}\n   `);
 
   console.log(`   \nTo country exchange rate: ${toAmount}\n  `);

   console.log(`   \nEnter amount : ${amount}\n  `);

   console.log(`   \nConverted Amount : ${convertedAmount1}\n  `);
