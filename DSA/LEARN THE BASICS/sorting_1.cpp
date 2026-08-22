#include <bits/stdc++.h>
using namespace std;

int selection_sort(int arr[], int n){
    int min,temp,t;
    for(int i=0; i<n-1;i++){ 
        t = 0;
        min = arr[i];
        for(int j = i;j<n;j++){ //found the min of the remaining array
            if(arr[j]<min){
                min = arr[j];
                t = j;
            }
        }
        temp = arr[i]; //assigned a temporary variable to the memory to be replaced
        arr[i]=min; //assignmed min value to ith place
        arr[t] = temp; //swapped the place of min value with this
        cout<<"pass " <<i+1 <<":"; //printing array after each pass
        for(int i = 0;i<n;i++){
           cout<<arr[i] <<" ";
        }
        cout<<endl;


        
    }
    for(int i = 0;i<n;i++){ //sorted array
        cout<<arr[i] <<" ";
    }
    return 0;
}

int bubble_sort(int arr[], int n){
    int temp,didswap;
    for(int i = n-1;i>0;i--){
        didswap = 0;
        for(int j = 0; j<i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                didswap = 1;
            }
            
        }
        if(didswap==0){
                break;
            }
    }
    for(int i = 0;i<n;i++){ //sorted array
        cout<<arr[i] <<" ";
    }
    return 0;

    }

int insertion_sort(int arr[], int n){
    for(int i = 1;i<n;i++){
        int key = arr[i];
        int j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    for(int i = 0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}

int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i = 0;i<n;i++) {
        cin>>arr[i];}
    //selection_sort(arr,n);
    //bubble_sort(arr,n);
    insertion_sort(arr,n);


}