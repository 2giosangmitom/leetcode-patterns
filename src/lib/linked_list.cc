#include "linked_list.hpp"

#include <sstream>
#include <string>

// Constructors
ListNode::ListNode() : val{0}, next{nullptr} {}
ListNode::ListNode(int val) : val{val}, next{nullptr} {}
ListNode::ListNode(int val, ListNode *next) : val{val}, next{next} {}

// Factory function to create linked list
ListNode *make_list(const std::vector<int> &list) {
    ListNode *head = nullptr;
    ListNode *current = head;

    for (const int &val : list) {
        auto new_node = new ListNode(val);
        if (current == nullptr) {
            head = new_node;
            current = new_node;
        } else {
            current->next = new_node;
            current = new_node;
        }
    }

    return head;
}

// Represent list in string
std::string ListNode::to_string() const {
    std::stringstream result;

    for (auto head = this; head != nullptr; head = head->next) {
        result << std::to_string(head->val);
        if (head->next) {
            result << " -> ";
        }
    }

    return result.str();
}

// Overload output operator
std::ostream &operator<<(std::ostream &os, ListNode *head) {
    os << head->to_string();
    return os;
}

// Overload equality operator
bool operator==(const ListNode &lhs, const ListNode &rhs) {
    auto currentA = &lhs;
    auto currentB = &rhs;

    while (currentA != nullptr && currentB != nullptr) {
        if (currentA->val != currentB->val) {
            return false;
        }
        currentA = currentA->next;
        currentB = currentB->next;
    }

    return currentA == currentB;
}

// Release dynamic allocated memory for linked list
void delete_list(std::initializer_list<ListNode *> heads) {
    for (auto head : heads) {
        ListNode *curr = head;

        while (curr != nullptr) {
            ListNode *next_node = curr->next;
            delete curr;
            curr = next_node;
        }
    }
}
