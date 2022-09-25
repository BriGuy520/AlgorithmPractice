def prime_finder(n):
  # Write your code here
  primes = []

  for num in range(2, n + 1):
    if is_prime(num):
      primes.append(num)

  return primes


def is_prime(n):
  print(n - 1)
  for num in range(2, n - 1):
    if n % num == 0:
      return False;
 
  return True;

print(prime_finder(11))