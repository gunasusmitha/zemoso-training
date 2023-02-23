"""
Alice and Bob are playing a game on a sequence a1,a2,…,an of length n. They move in turns and Alice moves first.                                                                                                                                                                                                                                                           In the turn of each player, he or she should select an integer and remove it from the sequence. The game ends when there is no integer left in the sequence.                                                                                                                         
Alice wins if the sum of her selected integers is even; otherwise, Bob wins.
Your task is to determine who will win the game, if both players play optimally.
"""
seq=list(map(int,input("Enter sequence:").split()))
alice=bob=0
flag=1
def logic(seq):
    for i in seq:
        if i%2==0:
            seq.remove(i)
            return i
    else:
        seq.remove(seq[0])
        return i
while seq:
    if flag==1:
        alice+=logic(seq)
        flag=0
    else:
        bob+=logic(seq)
        flag=1
if alice%2==0:
    print("Alice is winner")
else:
    print("Bob is winner")
    