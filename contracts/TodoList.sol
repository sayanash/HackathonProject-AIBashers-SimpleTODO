// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Task {
        string content;
        bool completed;
    }

    Task[] public tasks;

    function createTask(string memory _content) public {
        tasks.push(Task({ content: _content, completed: false }));
    }

    function toggleCompleted(uint _index) public {
        Task storage task = tasks[_index];
        task.completed = !task.completed;
    }

    function deleteTask(uint _index) public {
        require(_index < tasks.length, "Task does not exist.");
        for (uint i = _index; i < tasks.length - 1; i++) {
            tasks[i] = tasks[i + 1];
        }
        tasks.pop();
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
