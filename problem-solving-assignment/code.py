"""
Alice and Bob are playing a game on a sequence a1,a2,…,an of length n. They move in turns and Alice moves first.                                                                                                                                                                                                                                                           In the turn of each player, he or she should select an integer and remove it from the sequence. The game ends when there is no integer left in the sequence.                                                                                                                         
Alice wins if the sum of her selected integers is even; otherwise, Bob wins.
Your task is to determine who will win the game, if both players play optimally.
"""
seq=list(map(int,input("Enter sequence:").split()))
n=len(seq)
odd_count = 0
for i in seq:
	if i % 2 == 1:
		odd_count += 1
rem_odd_count = odd_count % 4
if rem_odd_count == 0 or rem_odd_count == 3:
	print('Alice is winner')
elif rem_odd_count == 2:
	print('Bob is winner')
else:
	if n % 2 == 0:
		print('Alice is winner')
	else:
		print('Bob is winner')


