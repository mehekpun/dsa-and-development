#include <bits/stdc++.h>
using namespace std;

class node{
    private:
       int data;
       node *next;
    node() {}
    node(int d){
        this->data = d;
        this->next = NULL;}
    node(int n, node *ptr){
        this->data = n;
        this->next = ptr;
    }
    }

traverse_node(node *head){
    node *t = head;
    while(t!=NULL){
        cout<< t->data;
        t = t->next;
    }
}
int main(){
    int n,x;
    cin>>n;
    node *head =  new node();
    cout<<"enter element to be inserted";
    cin>>x;
    head->data = x;
    head->next = NULL;
    for(int i =0;i<n;i++){
        cout<<"enter element to be inserted";
        cin>>x;
        node *t = new node(x);


    }

}
