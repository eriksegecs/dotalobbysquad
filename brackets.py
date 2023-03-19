def create_matchups(num_teams, upper_teams, lower_teams):
    """
    Cria as partidas para cada rodada da Upper Bracket e da Lower Bracket.

    Parâmetros:
        num_teams (int): O número total de times no campeonato.
        upper_teams (list): A lista de times que iniciarão na Upper Bracket.
        lower_teams (list): A lista de times que iniciarão na Lower Bracket.

    Retorna:
        Uma tupla contendo duas listas. A primeira lista é a lista de partidas da
        Upper Bracket e a segunda lista é a lista de partidas da Lower Bracket.
    """

    # Cria as partidas da Upper Bracket
    upper_matchups = []
    for i in range(len(upper_teams) // 2):
        upper_matchups.append((upper_teams[i], upper_teams[-i-1]))

    # Cria as partidas da Lower Bracket
    lower_matchups = []
    for i in range(len(lower_teams) // 2):
        lower_matchups.append((lower_teams[i], lower_teams[-i-1]))

    # Retorna as partidas para cada rodada
    return [upper_matchups], [lower_matchups]

import matplotlib.pyplot as plt
import networkx as nx

# Define o número de times e os times que começarão na Upper e na Lower Bracket
num_teams = 10
upper_teams = [1, 2, 3, 4, 5]
lower_teams = [6, 7, 8, 9, 10]

# Cria os jogos da Upper Bracket e da Lower Bracket
upper_bracket, lower_bracket = create_matchups(num_teams, upper_teams, lower_teams)

# Cria o grafo para representar o campeonato
G = nx.DiGraph()

# Adiciona os nós para cada partida da Upper Bracket
for i, matches in enumerate(upper_bracket):
    for j, match in enumerate(matches):
        node_label = f"U{i+1}M{j+1}\n{match[0]} x {match[1]}"
        G.add_node(node_label)

# Adiciona os nós para cada partida da Lower Bracket
for i, matches in enumerate(lower_bracket):
    for j, match in enumerate(matches):
        node_label = f"L{i+1}M{j+1}\n{match[0]} x {match[1]}"
        G.add_node(node_label)




# Define o layout do grafo
pos = nx.nx_agraph.graphviz_layout(G, prog='dot')

# Desenha o grafo com as labels
nx.draw(G, pos, with_labels=True, font_size=8)

# Exibe o diagrama
plt.show()