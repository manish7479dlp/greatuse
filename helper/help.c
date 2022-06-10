#include <stdio.h>

int greaterAmongTwo(int num1 , int num2) {
    
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

void main()
{
    int num1 , num2;
    
    printf("Enter 1st number.\n");
    scanf("%d",&num1);

    printf("Enter 2nd number.\n");
    scanf("%d",&num2);

    int res = greaterAmongTwo(num1 , num2);

    printf("%d is Greater among %d and %d",res , num1 ,num2);

}

// OUTPUT

// Enter 1st number.
// 5
// Enter 2nd number.
// 6
// 6 is Greater among 5 and 6