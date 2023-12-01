#############
simple RST
#############

`بازگشت به خانه`_

- مزایای rst
    #. سادگی 
    #. تسریع کار

you can export an rst_ file to an html_ file

simple python program:


.. code:: python
   
    print("hello, world!")


.. image:: logo.png
    :class: logo-img
    :scale: 40 %
    :alt: python logo
    :align: left


.. raw:: html
    :class: embedded
    :file: ./emb.html


.. list-table:: یک جدول
    :widths: 15 10
    :header-rows: 1
    :class: table-header-invert-others-lblue

    * - ادراک
      - اقدام
    * - [A, dirty]
      - cleanse
    * - [B, dirty]
      - cleanse
    * - [A, clean]
      - go to B
    * - [B, clean]
      - go to A


.. |resize_pic| image:: ./resize.png
        :width: 20pt

.. |rst| replace:: ReStructuredText


.. table:: test grid
    :class: grid-table
    :widths: grid

    +--------------+----------+-----------+-----------+
    | r1, c1       | c2       |       c3  |     c4    |
    +--------------+----------+-----------+-----------+
    | r2           |    rst is short for |rst|        |
    |              |                                  |
    +--------------+----------+-----------+-----------+
    | r3           |          |      |resize_pic|     |
    +--------------+----------+-----------+-----------+

.. include:: ./rst.rst
    :number-lines:
    :code: rst

.. _بازگشت به خانه: ./

.. _rst:

.. _html: