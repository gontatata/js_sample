# print [1,2]
# puts [1,2]
# 'p'は引数を型表現含めた形で出力し、出力後に改行が含まれる。 文字列を出力するときは "" で囲まれるため、デバッグなどの際に使用されるぞ。
# 'print'は引数を文字列に変換し出力し、出力後に改行が含まれない。 "" で囲まれない
# 'puts'は'print'に改行を含めたものになる。

# arr = ["apple", "orange", "grape", "banana", "peach"]
# puts arr[1]
# puts arr[2]
# puts arr[3]

# arr.delete(3)

# puts arr.join(":")

# weather= "sunny"
# case weather
# when "sunny" then
#     p "晴れ"
# end

# for num in 0..10 do
#     if num%2==0
#         p num
#     end
# end

# arr=[1,3,4,10,30,50]
# arr.each do |a|
#     p a**2
# end

# num=1000
# while num%88!=0 do
#     num+=1
# end
# p num

for i in 1..30 do
    print i
    if i%15==0
        print "fizzbuzz"
    elsif i%3==0
        print "fizz"
    elsif i%5==0
        print "buzz"
    end
    puts
    
end


