// Return the most profit from stock quotes.

// Stock quotes are stored in an array in order of date. The stock profit is the difference 
// in prices in buying and selling stock. Each day, you can either buy one unit of stock, sell 
// any number of stock units you have already bought, or do nothing. Therefore, the most profit 
// is the maximum difference of all pairs in a sequence of stock prices.

// @param {array} quotes
// @return {number} max profit
// Example:

//  [ 1, 2, 3, 4, 5, 6 ]        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
//  [ 6, 5, 4, 3, 2, 1 ]        => 0   (nothing to buy for profit)
//  [ 1, 6, 5, 10, 8, 7 ]       => 18  (buy at 1,6,5 and sell all at 10)
//  [ 1, 2, 10, 3, 2, 7, 3, 2 ] => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell 
//  them at 7)


#include <stddef.h>

unsigned get_most_profit_from_stock_quotes(const unsigned *quotes, size_t z) {

    //  <----  hajime!

    int profit = 0, buy = 0; 

    for(int i = 0; i < z; i++){
        for(int j = 0; j < z; z++){

        }
    }
    return profit;

}

int main(){

    int stock_prices = {1, 2, 10, 3, 2, 7, 3, 2};

    get_most_profict_from_stock_quotes(stock_prices, 8);
}