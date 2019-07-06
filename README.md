# WoD-Dice-Generator
A dice generator for the World of Darkness tabletop RPG games 

The dice system in the WoD is fairly simple. Characters taking non-trivial action must roll a number of dice determined by their own abilities. A character with a Intelligence of 3 and a Computer skill of 2 would roll 5 d10's to determine the outcome of an attempt to write a simple program.

The Storyteller sets the difficulty of any action being taken, the threshold at or above which a roll is counted as a success. If the character in the above example rolled a 3, 3, 5, 7, 10 against a difficulty of 7, the action would have 2 successes, which is a strong success.

However, if the result of any dice roll is a 1, it is a critical failure. Each critical failure subtracts from the highest rolled success until there are no more 1's or the number of total successes reach zero.

This dice generator is a function, where you enter the number of dice, and the difficulty number as arguments. It interprets the resluts of the dice roll, including critical failures, and then logs the result of the action being taken.
