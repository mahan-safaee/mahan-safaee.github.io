#############
simple RST
#############

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


.. include:: ./rst.rst
    :number-lines:
    :code: rst


.. _rst:

.. _html: