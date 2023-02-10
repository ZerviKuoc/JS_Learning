/* 
  装饰器模式（Decorator Pattern）
  允许向一个现有的对象添加新的功能，
  同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装

  应用实例： 
    1、孙悟空有 72 变，当他变成"庙宇"后，
    他的根本还是一只猴子，但是他又有了庙宇的功能。 
    2、不论一幅画有没有画框都可以挂在墙上，
    但是通常都是有画框的，并且实际上是画框被挂在墙上。
    在挂在墙上之前，画可以被蒙上玻璃，装到框子里；
    这时画、玻璃和画框形成了一个物体。

  优点：装饰类和被装饰类可以独立发展，不会相互耦合，
    装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
  缺点：多层装饰比较复杂。
  使用场景： 1、扩展一个类的功能。 2、动态增加功能，动态撤销。
  注意事项：可代替继承。

  =========================================================
  =========================================================

  在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时更改。
  这种类型的设计模式属于行为型模式

  意图：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

  主要解决：在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。

  应用实例： 
    1、诸葛亮的锦囊妙计，每一个锦囊就是一个策略。 
    2、旅行的出游方式，选择骑自行车、坐汽车，每一种旅行方式都是一个策略。 
    3、JAVA AWT 中的 LayoutManager。

  优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。
  缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。

  使用场景： 
    1、如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，
    那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。 
    2、一个系统需要动态地在几种算法中选择一种。 
    3、如果一个对象有很多的行为，如果不用恰当的模式，
    这些行为就只好使用多重的条件选择语句来实现。

  注意事项：如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。

  =========================================================
  =========================================================
  适配器模式 适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。
  这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。

  =========================================================
  =========================================================
  组合模式（Composite Pattern），又叫部分整体模式，
  是用于把一组相似的对象当作一个单一的对象。
  组合模式依据树形结构来组合对象，用来表示部分以及整体层次。
*/