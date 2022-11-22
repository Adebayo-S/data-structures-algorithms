#include <criterion/criterion.h>
#include "index.c"

Test(test, create) {
    char* new_str = reverse("abcd");
    cr_expect(strcmp(new_str, "dcba") == 0, "The returned string is reversed");
}

// Test(test, defined) {
//     char* new_str = reverse("  abcd");
//     cr_expect(strcmp(new_str, "dcba  ") == 0, "The returned string is reversed");
// }
