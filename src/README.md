# Descomplicando SOLID

</br>

## SRP - Single Responsibility Principle (Princípio da Responsabilidade Única)

### Explicação:

O SRP diz que uma classe deve ter **uma única responsabilidade** ou motivo para mudar. Ou seja, cada classe deve focar em fazer **uma única coisa** e fazer isso bem. Se uma classe tem múltiplas responsabilidades (ex.: lidar com lógica de negócio e acessar o banco de dados), ela se torna difícil de manter, testar e modificar, pois mudanças em uma responsabilidade podem afetar outras.

### Contexto:

Usamos o SRP quando percebemos que uma classe ou módulo está **fazendo muitas coisas**. Isso pode incluir diferentes aspectos da lógica de negócio, acesso a diferentes dados, ou até mesmo misturar regras de diferentes domínios de negócio.

### Onde usar:

Sempre que você ver uma classe que tem muitas funções que não estão diretamente relacionadas entre si, é um sinal de que o SRP pode ser útil. Por exemplo, uma classe que processa pagamentos e envia emails violaria o SRP.

### Como usar:

- **Comece com uma classe funcional** e depois identifique responsabilidades separadas.
- **Divida** classes grandes em classes menores, cada uma focada em uma única tarefa.
- Mova tipos (`Types` e `Interfaces`) para módulos separados, especialmente se eles forem compartilhados entre várias classes.

### Porque usar:

Seguir o SRP resulta em classes menores, mais focadas e fáceis de entender e manter. Isso melhora a coesão e o reuso, já que classes especializadas podem ser reutilizadas em diferentes contextos.

### Coesão:

Uma classe é **coesa** quando todos os seus métodos e atributos estão relacionados com a responsabilidade principal dela. Se uma classe tem métodos que não usam seus atributos, isso indica que a coesão está baixa, e esses métodos podem ser movidos para uma classe separada.

### Divisão de classe:

Quando uma classe cresce ao ponto de lidar com responsabilidades diferentes, é hora de dividi-la. Isso melhora a clareza e facilita a manutenção. Essa divisão pode impactar o código "cliente" (como o `main`), que precisará se adaptar às mudanças estruturais.

</br>
</br>

## OCP - Open/Closed Principle (Princípio Aberto/Fechado)

### Explicação:
O OCP estabelece que as classes devem estar **abertas para extensão** (podemos adicionar novas funcionalidades) mas **fechadas para modificação** (não devemos modificar o código existente quando adicionamos algo novo).

### Contexto:
Esse princípio é útil quando precisamos adicionar novos comportamentos sem alterar a estrutura base de uma classe. Por exemplo, em vez de alterar diretamente uma classe de pagamento quando adicionamos novos métodos de pagamento, podemos estendê-la ou usar injeção de dependência para introduzir novas formas de processar pagamentos.

### Onde usar:
Quando você percebe que, ao adicionar novos recursos, precisa constantemente alterar classes já existentes, isso é um sinal de que o OCP deve ser aplicado.

### Como usar:
- Use **herança** ou **injeção de dependência** para adicionar comportamentos novos.
- Ao invés de modificar uma classe para suportar novos casos, crie subclasses ou componentes que implementam a nova funcionalidade.

### Porque usar:
Ao seguir o OCP, seu código se torna **mais estável** e **testável**, pois você não precisa mexer em partes críticas já testadas. Isso também reduz o risco de introduzir novos bugs ao adicionar novas funcionalidades.

### DRY e OCP:
O OCP não entra em conflito com o princípio **DRY (Don't Repeat Yourself)**. Pelo contrário, ele complementa o DRY, evitando duplicação de código. Ao estender uma classe, estamos reaproveitando o código base sem precisar repetir lógica em classes diferentes.

</br>
</br>

## LSP - Liskov Substitution Principle (Princípio da Substituição de Liskov)

### Explicação:
O LSP diz que **subtipos devem ser substituíveis por seus tipos base**. Em outras palavras, se você tem uma classe `Animal` e uma classe `Dog` que herda de `Animal`, o código que espera um `Animal` deve funcionar corretamente com um `Dog` ou qualquer outro subtipo de `Animal`.

### Contexto:
Esse princípio é importante para garantir que as classes que estendem uma base mantenham o comportamento esperado. Se um subtipo muda drasticamente o comportamento da classe pai, ele viola o LSP.

### Onde usar:
Sempre que você usa herança, deve garantir que os subtipos não alteram o comportamento esperado da classe base. Se uma classe `Dog` herda de `Animal`, ela não pode modificar comportamentos centrais de `Animal`, como o método `eat()`.

### Como usar:
- **Evite alterar a lógica central** de uma classe base ao criar subclasses.
- Teste sempre as subclasses nos mesmos contextos onde a classe pai é usada.

### Porque usar:
O LSP garante que o código se mantenha previsível e fácil de entender, pois subtipos podem ser usados no lugar de seus tipos base sem surpresas ou comportamentos inesperados.

### Quebra do LSP:
- **Modificar o comportamento** de uma classe base na subclassificação pode quebrar o LSP.
- **Forçar implementações** que não fazem sentido para um subtipo também quebra o LSP, como forçar um `Bird` a implementar `fly()` mesmo que nem todos os pássaros voem.

</br>
</br>

## ISP - Interface Segregation Principle (Princípio da Segregação de Interface)

### Explicação:
O ISP diz que **clientes não devem ser forçados a depender de métodos que não utilizam**. Em vez de ter uma única interface grande e genérica, crie interfaces menores e mais específicas para diferentes tipos de clientes.

### Contexto:
Esse princípio é aplicado quando você vê interfaces inchadas com métodos que algumas classes implementam, mas outras não precisam. Por exemplo, se uma interface `Employee` tem métodos para `calculateSalary()` e `submitWork()`, mas apenas alguns tipos de `Employee` realmente utilizam esses métodos, você está violando o ISP.

### Onde usar:
Quando uma interface ou classe abstrata contém muitos métodos que são irrelevantes para alguns implementadores.

### Como usar:
- Quebre interfaces grandes em interfaces **menores e mais coesas**.
- Use **múltiplas interfaces** específicas para cada grupo de comportamento, em vez de uma única interface grande.

### Porque usar:
O ISP melhora a **coesão** e mantém o código mais **flexível** e fácil de entender, evitando que classes implementem métodos que nunca serão usados.

</br>
</br>

## DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)

### Explicação:
O DIP afirma que **módulos de alto nível** (aqueles que controlam o fluxo do sistema) não devem depender de **módulos de baixo nível** (aqueles que executam tarefas específicas). Ambos devem depender de **abstrações** (interfaces ou classes abstratas), e não de implementações concretas.

### Contexto:
Usamos DIP para evitar o acoplamento forte entre diferentes partes do sistema. Se um módulo de alto nível depende diretamente de uma implementação concreta, qualquer mudança nessa implementação forçará uma mudança no módulo de alto nível.

### Onde usar:
Quando um módulo central da aplicação depende diretamente de uma classe concreta. Por exemplo, um controlador que depende de uma classe `PaymentService` diretamente deve, em vez disso, depender de uma abstração (`IPaymentService`).

### Como usar:
- Utilize **injeção de dependência** para fornecer instâncias de classes concretas.
- Defina **interfaces** para que módulos dependam de abstrações, e não de implementações.

### Porque usar:
O DIP reduz o **acoplamento** e facilita a **manutenção** e **testes**, pois podemos substituir facilmente a implementação de uma dependência sem impactar o restante do sistema.

</br>
</br>
</br>

# Vantagens, Desvantagens e Princípios Auxiliares

## **Vantagens do S.O.L.I.D:**

- **Código modular**: Fácil de entender e manter.
- **Código reutilizável**: Segue o DRY (Don't Repeat Yourself), evitando duplicação de lógica.
- **Baixo acoplamento**: As partes do sistema são independentes, tornando-as mais fáceis de modificar.
- **Alta coesão**: Cada parte do código tem um propósito bem definido.
- **Expansibilidade**: Novos recursos podem ser adicionados sem modificar código existente.
- **Separação de responsabilidades**: O sistema é dividido de acordo com as diferentes responsabilidades.

## **Desvantagens do S.O.L.I.D:**

- **Complexidade**: Pode aumentar a complexidade do código.
- **Mais código**: Seguir estritamente os princípios gera mais classes, interfaces e arquivos.
- **Cuidado com YAGNI e KISS**: **YAGNI (You Aren’t Gonna Need It)** e **KISS (Keep It Simple, Stupid)** indicam que não devemos complicar o código com abstrações desnecessárias. Se você não precisar de certa abstração agora, talvez seja melhor esperar até que ela seja necessária.

</br>
</br>

# Princípios Auxiliares:
- ### **DRY (Don't Repeat Yourself)**: Evite duplicação de código. Sempre que houver lógica repetida, considere mover para uma função ou classe reutilizável.

- ### **YAGNI (You Aren’t Gonna Need It)**: Não crie funcionalidades ou abstrações antes de serem realmente necessárias. Isso evita complexidade desnecessária.

- ### **KISS (Keep It Simple, Stupid)**: Mantenha o código simples e direto. Não complique sem motivo, priorize soluções claras.

- ### **SOC (Separation of Concerns)**: Cada parte do sistema deve ter uma responsabilidade clara e separada. Isso melhora a organização e facilita a manutenção.

- ### **MVP (Minimum Viable Product)**: Concentre-se em entregar o mínimo produto funcional antes de otimizar ou aplicar padrões complexos.
