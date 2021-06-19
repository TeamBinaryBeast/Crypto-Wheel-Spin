#include<iostream>
#define size 20
using namespace std;

 

 


class Stack
{
    int a[size];
    int top=-1;

 

 

public:
    int push(int value)   
    {
       
        if(size==top){
            cout<<"Can't insert! stack is full";
        }
        else{
        top++;
        a[top]=value;
        }

 

 

        return 1;
    }

 

 

    int pop() 
    {
        
        if(isEmpty()){
            cout<<"Can't delete! stack is empty";
            return -1;
        }
        else{
             int save=a[top];
             top--;
             return save;
        }

 

 


    }

 

 


    bool isEmpty()
    {
        if(top ==-1)
            return true;
        else
            return false;
    }

 

 

};

 

 


class Queue
{
    int Q[size];
    int Front = -1;
    int Rear = -1;

 

 

public:
    int enqueue(int value)  
    {
        
        if(size==Rear){
            cout<<"Can't insert! queue is full";
            return -1;
        }
        else{
            Rear++;
            Q[Rear] = value;
            return 1;
        }

 


    }

 

 

    int dequeue()   
    {
        
        if(isEmpty()){
            cout<<"Can't delete! queue is empty";
            return -1;
        }
        else if(Front<Rear){
            Front++;
            return Q[Front];
        }
        else if(Front==Rear){
            Front = -1;
            Rear = -1;
            return Q[Front];
        }

 


    }

 

 

    bool isEmpty()
    {
        if(Front == -1 & Rear ==-1)
            return true;
        else
            return false;
    }

 

};

 

 

int main()
{
    Stack myStack;
    myStack.push(50);
    myStack.push(10);
    myStack.push(40);
    cout<<myStack.pop()<<endl;
    cout<<myStack.pop()<<endl;

 

    Queue myQueue;
    myQueue.enqueue(30);
    myQueue.enqueue(10);
    myQueue.enqueue(40);
    cout<<myQueue.dequeue()<<endl;
    cout<<myQueue.dequeue()<<endl;

 

 

    return 0;
}