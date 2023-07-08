# ---- Process Vs Thread ----

Process-:
--> The Program under execution is called a Process.
    Process run independently and don't share memory.
    The OS treats all different processes separately.

    if we open a program like MS word it's called a process. If we open MS word 10 times then for OS it's 10 different process. 

Thread-:
--> It is a light weight process that execute within
    a process.
    A process can contain single or multiple thread.

Multithreading:
--> When multiple threads executing at the same time inside a process.

Main Thread -----------> Process.

There are 3 ways to create thread in Js:

1. Thread using a Function.
2. Thread by executing the thread class
3. Thread without executing the thread class.
