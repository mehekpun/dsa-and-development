#include <bits/stdc++.h>
using namespace std;

void pattern1(int n){
    for(int i = 0;i<n;i++){
        for(int j = 0; j<n;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void pattern2(int n){
    for(int i = 1; i<=n;i++){
        for(int j = 0; j<i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void pattern3(int n){
    for(int i = 1; i<=n;i++){
        for(int j = 1; j<=i;j++){
            cout<<j;
        }
        cout<<endl;
    }
}
void pattern4(int n){
    for(int i = 1; i<=n;i++){
        for(int j = 1; j<=i;j++){
            cout<<i;
        }
        cout<< endl;
    }
}
void pattern5(int n){
    for(int i = 0; i<n;i++){
        for(int j = n-i;j>0;j--){
            cout<<"*";
        }
        cout<<endl;
    }
}
void pattern6(int n){
    for(int i = 0; i<n; i++){
        for(int j = 1; j<=n-i;j++){
            cout<<j;
        }
        cout<<endl;
    }
}
void pattern7(int n){
    for(int i =0;i<n;i++){
        for(int j = 1;j<=(2*n-1); j++){
            if(j>=n-i && j<=n+i){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
}
void pattern8(int n){
    for(int i = n; i>0;i--){
        for(int j =1 ; j<=(2*n-1); j++){
            if(j<=n-i){
                cout<<" ";
            }
            else if(j>n+i-1){
                cout<<" ";
            }
            else{
                cout<<"*";
            }
        }
        cout<<endl;
    }
}
void pattern9(int n){
    for(int i =0;i<n;i++){
        for(int j = 1;j<=(2*n-1); j++){
            if(j>=n-i && j<=n+i){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
    for(int i = n-1; i>0;i--){
        for(int j =1 ; j<=(2*n-1); j++){
            if(j<=n-i){
                cout<<" ";
            }
            else if(j>n+i-1){
                cout<<" ";
            }
            else{
                cout<<"*";
            }
        }
        cout<<endl;
    }

}
void pattern10(int n){
    for(int i = 0; i<n;i++){
        for(int j = 0;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
    for(int i = n-1;i>0;i--){
        for(int j = 0; j<i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void pattern11(int n){
    for(int i = 1; i<=n;i++){
        for(int j = 1;j<=i;j++){
            if((i+j)%2==0){
                cout<<1;
            }
            else{
                cout<<0;
        }
        }
        cout<<endl;
    }
}
void pattern12(int n){
    for(int i = 1;i<=n;i++){
        for(int j = 1;j<=2*n;j++){
            if(j<=i || j>2*n-i){
                if(j<=n){
                    cout<<j;
                }
                else{
                    cout<<(2*n+1)-j;
                }
            }
            else{
                cout<<" ";
            }

        }
        cout<<endl;
    }
}
void pattern13(int n){
    int c = 0;
    for(int i=0; i<n;i++){
        for(int j=0;j<i;j++){
            c++;
            cout<<c;
        }
        cout<<endl;
    }
}
void pattern14(int n){
    for(int i = 0; i<=n;i++){
        for(char j = 'A'; j<'A'+i;j++){
            cout<<j;
        }
        cout<<endl;
    }
}
void pattern15(int n){
    for(int i = n;i>0;i--){
        for(char j = 'A';j<'A'+i;j++){
            cout<<j;
        }
        cout<<endl;
    }
}
void pattern16(int n){
    for(int i =1;i<=n;i++){
        for(char j = 'A';j<'A'+i;j++){
            cout<<char('A'+i-1);
        }
        cout<<endl;
    }
}
// //void pattern17(int n){
//    for(int i = 1;i<=n;i++){
//     for(int j = 0;j<n-i-1;j++){
//         cout<<" ";
//     }
//     char ch = 'A';
//     int breakpoint = (2*1 +1)/2;
//     for(int j = 1;j<2*i+1;j++){
//         cout<<ch;
//         if(j <=breakpoint)ch++;
//         else ch--;
//     }
//     cout<<endl;
//    }
// }
void pattern18(int n){
    char ch = 'A';
    int t = n;
    for(int i = 0; i<n;i++){
        t = n-i;
        for(int j = 0;j<(i+1);j++){
            
            cout<<char(ch+t-1);
            t++;
    }
    cout<<endl;
}}
void pattern19(int n){
    for(int i = 0;i<n;i++){
        for(int j = 0;j<n-i; j++){
            cout<<"*";
        }
        for(int j = 0;j<i;j++){
            cout<<"  ";
        }
        for(int j = 0;j<n-i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}


int main(){
    int n ;
    cin>>n;
    pattern19(n);

    return 0;
}