#include <string>

std::string str1 = "hello";

int outerFunction() {
    int x = 10;
    
    // Local function
    int innerFunction() {
        return x * 2; // Can access variables in the outer function
    }
    
    return innerFunction(); // Call the local function
}


int main()
{
    str1.erase(2);
    
}