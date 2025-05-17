let visited = new Set()

function DFS_Graph (graph, start, visited ) {
  if (visited.has(start)) return;

  visited.add(start);
  
  for (const neighbor of graph[start]) {
    DFS_Graph (graph, neighbor, visited);
  }

}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'E', 'F'],
  E: ['C', 'D', 'F'],
  F: ['D', 'E']
};

DFS_Graph (graph, 'A', visited);
console.log(visited)