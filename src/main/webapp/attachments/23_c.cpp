#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define ull unsigned long long
#define P pair<ll, ll>
const ll mod = 1000000007; //1000000007 998244353 
#define M 1000000
 
void solve(){
    ll n;
    cin >> n;
    vector<ll> num;
    multiset<ll> ms;
    for(int i = 0; i < 2*n; i++){
        ll x;
        cin >> x;
 
        num.push_back(x);
        ms.insert(x);
    }
    sort(num.begin(), num.end());
 
    for(int i = 0; i < 2*n-1; i++){
        ll counter = n - 1;
        vector< P > ans;
        ans.push_back({num[2*n - 1], num[i]});
        ll x = num[2*n - 1];
        multiset<ll> nums = ms;
        nums.erase(nums.find(num[2*n - 1]));
        nums.erase(nums.find(num[i]));
        while(counter){
            ll a = *nums.rbegin();
            nums.erase(--nums.end());
            auto iter = nums.find(x - a);
            if(iter == nums.end()){
                break;
            }
            ans.push_back({a, x - a});
            nums.erase(iter);
            x = a;
            counter--;
        }
        if(counter == 0){
            cout << "YES\n";
            cout << ans[0].first + ans[0].second << "\n";
            for(auto x : ans){
                cout << x.first << " " << x.second << "\n";
            }
            return;
        }
    }
    cout << "NO\n";
 
}
 
int main(){
    #ifndef ONLINE_JUDGE
        freopen("out.dat","w",stdout); freopen("in.dat","r",stdin);
    #endif
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    ll t = 1;
    cin >> t;
    while(t--) 
        solve();
    return 0;
}