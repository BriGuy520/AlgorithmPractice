def zip_with(fn, a0, a1):
  
  return [fn(a0[i], a1[i]) for i in range(min(len(a0), len(a1)))]
  


    