import numpy as np

def get_most_profit_from_stock_quotes(quotes): 
  # your code here
  np_arr = np.array(quotes)
  sell_price = np.amax(np_arr)
  profit = 0
    
  while len(np_arr) > 0:
    
    current_price = np_arr[0]
    
    profit += sell_price - current_price
    
    quotes.pop(0)
    
    np_arr = np.array(quotes)
    
    sell_price = np.array(np_arr)
  
  print(quotes)
  
get_most_profit_from_stock_quotes([1, 2, 10, 3, 2, 7, 3, 2])