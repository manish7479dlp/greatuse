#include&ltstdio.h&gt
int main()
{
    int tableNumber;
    printf("Enter the Table Number.\n");
    scanf("%d",&tableNumber);

    for(int i = 1; i &lt= 10; i++)
    {
        printf("%d x %d = %d\n",tableNumber , i , tableNumber * i);
    }
}
